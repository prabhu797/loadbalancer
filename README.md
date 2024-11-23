# LoadBalancer Testing

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

After testing for a while I realized that, web applications that use/depende on route or query files from the server
cannot be load balanced. Because we cannot add the statip path to these routes or files. So I guess only backend part should be load balanced and not front end. Not sure about this though, as of now this is what I learnt from testing.