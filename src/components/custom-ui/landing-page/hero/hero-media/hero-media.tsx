"use client";

import { PageMutation } from "@tina/__generated__/types";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export const HeroMedia = (props: PageMutation) => {
  return (
    <>
      <div className="relative h-80 md:h-auto" data-tina-field={tinaField(props, "imgSrc")} >
        {/* Section 1: Hero image */}
        <Image
          src={props.imgSrc || ""}
          alt="Happy People"
          className="rounded-lg shadow-lg object-cover w-full md:h-[56vh] xl:h-[70vh] max-h-[550px]"
          width={987}
          height={600}
        />
      </div>
    </>
  );
};

/**
 * ---------------------------------------------------------------------
 * File Name : hero-media.tsx
 * Component Name : HeroMedia
 * Component Type : Media Component
 * Dev Initials : Aniket Raj
 * Date Created : 2024-04-04
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to display a visually appealing image
 * in the hero section of the website. It serves as a complementary element
 * to the HeroContent component, enhancing the overall visual impact and
 * engagement of the hero section.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The HeroMedia component renders an image within the hero section
 * of the website. It uses the Next.js Image component to optimize and
 * efficiently load the image. The component applies styling classes using
 * Tailwind CSS to ensure a responsive and visually appealing display of the
 * image across different screen sizes.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Hero image
 * This section contains the hero image displayed in the component. It uses
 * the Next.js Image component, which optimizes and efficiently loads the
 * image. The image source URL is provided, along with an alt text for
 * accessibility. Tailwind CSS classes are applied to style the image,
 * including rounded corners, a shadow effect, object-fit cover, and
 * responsive height and maximum height values.
 *
 * ------------------------------
 * Input Comments:
 * The HeroMedia component does not receive any input props.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs an optimized and visually appealing image within
 * the hero section of the website. The image is styled using Tailwind CSS
 * classes for a responsive and engaging display across different screen
 * sizes.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows common patterns for
 * displaying images using the Next.js Image component and styling them
 * with Tailwind CSS classes. The component is straightforward and does
 * not require any unusual code.
 *
 */
