import fs from "fs";
import path from "path";

const DOCS_DIR = path.join(process.cwd(), "src/content/docs");

function formatFolderName(folderName: string): string {
  return folderName.replace(/[-_]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function generateSidebar() {
  return fs
    .readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((folder) => ({
      label: formatFolderName(folder.name),
      autogenerate: { directory: `${folder.name}` },
    }));
}

export const sidebar = generateSidebar();

console.log("Generated Sidebar:", JSON.stringify(sidebar, null, 2));