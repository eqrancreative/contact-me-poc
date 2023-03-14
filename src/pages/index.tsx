import Head from "next/head";
import { Inter } from "next/font/google";
import Animation from "@/components/Animation";
import EmailForm from "@/components/EmailForm";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box display={'flex'} flexDirection={'row'} justifyContent={{ base: 'center', lg: 'center' }}>
          <Animation />
          <EmailForm />
        </Box>
      </main>
    </>
  );
}