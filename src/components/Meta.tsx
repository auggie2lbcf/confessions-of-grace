import Head from 'next/head';
import React from 'react';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const Meta: React.FC<MetaProps> = ({
  title = 'Confessions of Grace',
  description = 'A blog dedicated to exploring the doctrines of grace and Reformed theology.',
  keywords = 'reformed theology, doctrines of grace, christianity, calvinism, theology',
  image = '/images/og-default.jpg',
  url = 'https://confessionsofgrace.com',
  type = 'website'
}) => {
  const siteTitle = title === 'Confessions of Grace' 
    ? 'Confessions of Grace | Confessing Christ. Rejoicing in Grace.' 
    : `${title} | Confessions of Grace`;

  image = image.startsWith('http') ? image : `https://www.confessionsofgrace.com${image}`;
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:logo" content="/logo.svg" />
        
      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Meta;