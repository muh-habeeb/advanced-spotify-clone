import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		// The "@" alias is used to reference the "src" directory.
		// This convention helps simplify imports; ensure team members are aware.
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	
});
