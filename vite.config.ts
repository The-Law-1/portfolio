import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from "url";

export default ({ mode }:any) => {

  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
  //   base: "/.../",
  
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 3000,
    }
  })
};