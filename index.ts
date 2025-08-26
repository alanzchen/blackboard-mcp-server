#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as fs from "fs";
import * as fsPromises from "fs/promises";
import * as path from "path";
import * as os from "os";
import YAML from "yaml";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { startServer } from "./server.js";
import readline from 'node:readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to prompt for ACCESS_TOKEN
async function promptForAccessToken(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('\n🔑 Enter your Blackboard Learn ACCESS_TOKEN: ', (token) => {
      rl.close();
      resolve(token.trim());
    });
  });
}

async function promptForBaseUrl(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('\n🏫 Enter your Blackboard Learn BASE_URL (e.g., https://myschool.blackboard.com): ', (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function updateGooseConfig(accessToken: string, baseUrl: string): Promise<void> {
  try {
    console.log("\nUpdating Goose configuration...");

    const homedir = os.homedir();
    const gooseConfigPath = path.join(
      homedir,
      ".config",
      "goose",
      "config.yaml"
    );

    // Check if Goose config directory exists
    const gooseConfigDir = path.dirname(gooseConfigPath);

    if (!fs.existsSync(gooseConfigDir)) {
      console.warn("Warning: Goose directory not found at", gooseConfigDir);
      console.warn("Goose does not appear to be installed on this system.");
      console.warn("Skipping Goose configuration update.");
      return;
    }

    // Read existing config or create new one
    let config: any = { extensions: {} };
    if (fs.existsSync(gooseConfigPath)) {
      const configContent = await fsPromises.readFile(gooseConfigPath, "utf-8");
      try {
        config = YAML.parse(configContent) || { extensions: {} };
      } catch (e) {
        console.log("Error parsing Goose config, creating new one");
      }
    } else {
      console.log("Goose config file not found, creating new one");
    }

    // Add or update Blackboard Learn MCP Server extension
    if (!config.extensions) {
      config.extensions = {};
    }

    config.extensions["blackboard_mcp_server"] = {
      name: "Blackboard Learn MCP Server",
      cmd: "npx",
      args: ["blackboard-mcp-server", "start"],
      enabled: true,
      type: "stdio",
      env: {
        ACCESS_TOKEN: accessToken,
        BASE_URL: baseUrl,
      }
    };

    // Write updated config
    await fsPromises.writeFile(
      gooseConfigPath,
      YAML.stringify(config, {
        collectionStyle: "block",
      })
    );
    console.log("Updated Goose configuration at", gooseConfigPath);
  } catch (error) {
    console.error("Failed to update Goose config:", error);
  }
}

async function updateClaudeConfig(accessToken: string, baseUrl: string): Promise<void> {
  try {
    console.log("\nUpdating Claude configuration...");

    const homedir = os.homedir();
    const platform = os.platform();

    let claudeConfigPath: string;

    if (platform === "win32") {
      claudeConfigPath = path.join(
        homedir,
        "AppData",
        "Roaming",
        "Claude",
        "claude_desktop_config.json"
      );
    } else if (platform === "darwin") {
      claudeConfigPath = path.join(
        homedir,
        "Library",
        "Application Support",
        "Claude",
        "claude_desktop_config.json"
      );
    } else {
      claudeConfigPath = path.join(homedir, ".config", "claude", "config.json");
    }

    // Check if Claude config directory exists
    const claudeConfigDir = path.dirname(claudeConfigPath);
    const claudeAppDir = path.dirname(claudeConfigDir);
    
    if (!fs.existsSync(claudeAppDir)) {
      console.warn("Warning: Claude app directory not found at", claudeAppDir);
      console.warn("Claude does not appear to be installed on this system.");
      console.warn("Skipping Claude configuration update.");
      return;
    }

    if (!fs.existsSync(claudeConfigDir)) {
      console.log("Claude config directory not found, creating it...");
      await fsPromises.mkdir(claudeConfigDir, { recursive: true });
    }

    // Read existing config or create new one
    let config: any = {};
    if (fs.existsSync(claudeConfigPath)) {
      const configContent = await fsPromises.readFile(claudeConfigPath, "utf-8");
      try {
        config = JSON.parse(configContent);
      } catch (e) {
        console.log("Error parsing Claude config, creating new one");
      }
    } else {
      console.log("Claude config file not found, creating new one");
    }

    // Add or update Blackboard Learn MCP Server
    if (!config.mcpServers) {
      config.mcpServers = {};
    }

    config.mcpServers["mcp_blackboard_api"] = {
      command: "npx",
      args: ["blackboard-mcp-server", "start"],
      env: {
        ACCESS_TOKEN: accessToken,
        BASE_URL: baseUrl,
      }
    };

    // Write updated config
    await fsPromises.writeFile(
      claudeConfigPath,
      JSON.stringify(config, null, 2)
    );
    console.log("Updated Claude configuration at", claudeConfigPath);
  } catch (error) {
    console.error("Failed to update Claude config:", error);
  }
}

async function generateGooseUrl(): Promise<string> {
  try {
    const packageName = "blackboard-mcp-server";
    const gooseUrl = `goose://extension?cmd=npx&arg=${encodeURIComponent(
      packageName
    )}&arg=start&id=mcp_blackboard_api&name=Blackboard%20Learn%20MCP%20Server&description=Blackboard%20Learn%20API%20MCP%20Server`;

    return gooseUrl;
  } catch (error) {
    console.error("Failed to generate Goose URL:", error);
    throw error;
  }
}

async function main() {
  const startCommand = async () => {    
    try {
      await startServer();
    } catch (error) {
      console.error(" Failed to start server:", error);
      process.exit(1);
    }
  };

  const argv = await yargs(hideBin(process.argv))
    .scriptName("mcp_blackboard_api")
    .usage("$0 [cmd] [args]")
    .command("install", "Install Blackboard Learn MCP Server in Goose and Claude", {}, async () => {
      console.log("\n🚀 Starting Blackboard Learn MCP Server installation...\n");
      
      console.log("This will configure the Blackboard Learn MCP Server for use with Claude and Goose.");

      // Prompt for Blackboard Learn access token
      const accessToken = await promptForAccessToken();
      if (!accessToken) {
        console.warn("\nNo access token provided. Server will not be able to access Blackboard Learn API.");
        console.warn("You can set ACCESS_TOKEN environment variable when starting the server manually.");
      }

      // Prompt for base URL
      const baseUrl = await promptForBaseUrl();
      console.log(`\n🏫 Using Blackboard Learn instance: ${baseUrl}`);

      await updateClaudeConfig(accessToken, baseUrl);
      await updateGooseConfig(accessToken, baseUrl);

      const gooseUrl = await generateGooseUrl();

      console.log("\n✨ Installation complete! ✨");
      console.log(
        "\n🦢 To add this extension to Goose, copy and paste the following URL into your browser:"
      );
      console.log(`\n\x1b[1m${gooseUrl}\x1b[0m\n`);
    })
    .command("start", "Start the Blackboard Learn MCP Server", {}, startCommand)
    .command(
      "get-goose-url",
      "Get Goose URL for the server",
      {},
      async () => {
        console.log("\n🔍 Getting Goose URL for Blackboard Learn MCP Server...");
        const gooseUrl = await generateGooseUrl();
        console.log("\n🦢 Goose URL for Blackboard Learn MCP Server:");
        console.log(`\n\x1b[1m${gooseUrl}\x1b[0m\n`);
      }
    )
    .command("$0", "Default command - starts the server", {}, startCommand)
    .help()
    .argv;
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});