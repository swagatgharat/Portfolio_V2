import web from '../service/web.png'
import android from '../service/android.png'
import digital from '../service/digital.png'
import download from '../service/download.png'

export const service_assets = {
    web,
    android,
    digital,
    download
}

export const service_data = [
    {
        icon: service_assets.web,
        title: 'Web Development',
        description: "• Designing and developing responsive websites.",
        description1: "• Building scalable front-end and back-end solutions.",
        description2: "• Ensuring SEO optimization and fast performance."
    },
    {
        icon: service_assets.android,
        title: 'Application Development',
        description: "• Creating cross-platform or native mobile apps.",
        description1: "• Optimizing performance for various devices.",
        description2: "• Integrating APIs and backend services seamlessly.",
    },
    {
        icon: service_assets.digital,
        title: 'Digital Marketing',
        description: "• Social Media Content Management",
        description1: "• Managing SEO and social media campaigns.",
        description2: "• Meta (Facebook & Instagram) Advertising.",
    }
]