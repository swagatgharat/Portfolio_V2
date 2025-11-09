import profile from '../about/profile.png'
import code_light from '../about/code_light.png'
import code_dark from '../about/code_dark.png'
import education_light from '../about/education_light.png'
import education_dark from '../about/education_dark.png'
import certificate_light from '../about/certificate_light.png'
import certificate_dark from '../about/certificate_dark.png'

export const about_assets = {
    profile,
    code_light,
    code_dark,
    education_light,
    education_dark,
    certificate_light,
    certificate_dark
}

export const info_list = [
    { icon: about_assets.code_light, iconDark: about_assets.code_dark, title: 'Languages', description: 'Lorem Ipsum' },
    { icon: about_assets.education_light, iconDark: about_assets.education_dark, title: 'Education', description: 'Lorem Ipsum' },
    { icon: about_assets.certificate_light, iconDark: about_assets.certificate_dark, title: 'Certificate', description: 'Lorem Ipsum' }
];

export const skill_data = [
    { title: 'Lorem Ipsum' }
];