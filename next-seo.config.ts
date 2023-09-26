import { type DefaultSeoProps } from 'next-seo'

export const SeoConfig: DefaultSeoProps = {
    title: 'WheeledAI - AI-Powered Vehicle Inspection',
    description:
        'WheeledAI is an innovative AI-powered solution that streamlines vehicle inspections for rideshare drivers, ensuring safety and convenience.',
    openGraph: {
        title: 'WheeledAI - AI-Powered Vehicle Inspection',
        type: 'website',
        locale: 'en_US',
        url: 'https://www.wheeled.ai',
        siteName: 'WheeledAI - AI-Powered Vehicle Inspection',
        profile: {
            firstName: 'Nick',
            lastName: 'Mezacapa',
        },
        description:
            'WheeledAI is an innovative AI-powered solution that streamlines vehicle inspections for rideshare drivers, ensuring safety and convenience.',
    },
    twitter: {
        handle: '@wheeled_',
        site: '@wheeled_',
        cardType: 'summary_large_image',
    },
}
