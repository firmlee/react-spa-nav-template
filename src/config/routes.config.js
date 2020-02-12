import PageHome from "../pages/page-home"
import PageNav1 from "../pages/page-nav1"
import PageNav2 from "../pages/page-nav2"

const ROUTES = [
    {
        key: 'Home',
        link: '/home',
        iconType: 'home',
        text: 'Home',
        component: PageHome
    }, {
        key: 'Nav1',
        link: '/nav1',
        iconType: 'tag',
        text: 'Nav1',
        component: PageNav1
    }, {
        key: 'Nav2',
        link: '/nav2',
        iconType: 'tag',
        text: 'Nav2',
        component: PageNav2
    }
];

export { ROUTES };