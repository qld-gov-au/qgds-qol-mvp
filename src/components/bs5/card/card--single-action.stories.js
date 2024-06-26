// card--single-action.stories.js
import { Card } from './Card.js';
import defaultdata from './card.data.json';

export default {
  tags: ["autodocs"],
  title: "Components/Card/Single action",
  render: (args) => {
    return `
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      ${new Card(args).html}
      ${new Card({ ...args, iconClasses: "fa-solid fa-pen-ruler", iconPosition: "icon-left" }).html}
      ${new Card({ ...args, arrow: true, description: "" }).html}
      ${new Card({ ...args, footer: "Footer content" }).html}
      ${new Card({ ...args, iconClasses: "fa-solid fa-pen-ruler", iconPosition: "icon-top" }).html}
      ${new Card({ ...args, image: "./assets/img/image-placeholder.png", imageAlt: "A grey placeholder image with an icon in the centre." }).html}
      ${new Card({ ...args, image: "./assets/img/image-placeholder.png", imageAlt: "A grey placeholder image with an icon in the centre.", video: true, videoDuration: "3:00" }).html}
      ${new Card({ ...args, image: "./assets/img/image-placeholder.png", imageAlt: "A grey placeholder image with an icon in the centre.", date: "26 April 2024" }).html}
    </div>
    `;
  },
  args: defaultdata.singleAction,
  argTypes: {
    date: {
      control: "text",
    },
    variantClass: {
      control: "select",
      options: {
        Default: "default",
        Light: "light",
        Alternative: "alt",
        Dark: "dark",
        "Dark alternative": "dark-alt",
      },
    },
    action: {
      control: "select",
      options: {
        None: "no",
        Single: "single",
        Multi: "multi",
      },
    },
  },
  parameters: {
    docs: {
      controls: {
        exclude: ["link", "arrow", "iconPosition"],
      },
    },
  },
};

export const Default = { };

export const Dark = {
  name: "Dark theme",
  parameters: {
    backgrounds: {
      default: "Dark",
    },
  },
  decorators: [
    (Story) => {
      return `
      <div class="dark">
          ${Story()}
      </div>
      `;
    },
  ],
};
