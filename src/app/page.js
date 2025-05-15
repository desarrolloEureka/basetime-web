export default function Home() {
  return null;
}

// Redirección automática
export async function redirect() {
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    }
  }
}
