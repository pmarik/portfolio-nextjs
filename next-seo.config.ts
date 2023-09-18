import type { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
    description: 'Boost your business with enhanced web development and design solutions from Marik Tech.',
    defaultTitle: 'Marik Tech | Software Engineer',
    canonical: 'https://marik.tech',
    additionalLinkTags: [
        {
            rel: 'icon',
            href: 'https://marik.tech/favicon.ico'
        }
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://marik.tech',
        title: 'Marik Tech | Software Engineer',
        siteName: 'Marik Tech',
        description: 'Boost your business with enhanced web development and design solutions from Marik Tech.',
        images: [
            {
                url: 'https://marik.tech/marik-tech-og.jpg',
                alt: 'View Marik Tech Portfolio',
                type: 'image/jpg',
                width: 1200,
                height: 600
                // secureUrl: ''
            }
        ]
    }
}

export default config;