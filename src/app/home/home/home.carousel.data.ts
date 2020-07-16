export interface HomeCarouselItem {
  title: string;
  sub_title?: string;
  content?: string;
  value?: number;
  period?: string;
  image?: string;
  action_text?: string;
  url: string;
}

export const HomeCarousel: HomeCarouselItem[] = [
  {
    title: "Start any time. Leave any time.",
    content: "Subscriptions starting from",
    value: 199,
    period: "per month",
    image: "assets/images/leave_anytime.png",
    action_text: "LET'S START",
    url: "/plans"
  },
  {
    title: "We cover everything. Period.",
    content: "Medicines, medical tests, consultation charges, hospitalisation",
    image: "assets/images/we_cover_everything.svg",
    action_text: "LET'S START",
    url: "/plans"
  },
  {
    title: "Get well soon, get home sooner.",
    content:
      "No more waiting at the hospital for approvals. We transfer your benefits directly to you, <strong>before</strong> you step into a hospital",
    image: "assets/images/image.svg",
    action_text: "Learn More",
    url: "/plans"
  },
  {
    title: "No more <span>nasty surprises</span>",
    content: "Our plans do not have any hidden limits or exclusions",
    image: "assets/images/hidden_expensive.svg",
    action_text: "Explore our plans",
    url: "/plans"
  }
];

export const HomeCarouselConfig = {
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplayHoverPause: true,
  autoplay: true,
  slideSpeed: 100,
  mouseDrag: true,
  singleItem: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  autoplayTimeout: 8000,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: false,
      // loop: false,
      margin: 0
    }
  }
};
