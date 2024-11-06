/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        //Aqui cambiamos la ruta a nuestro antojo
        destination: "/public/perfil",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
