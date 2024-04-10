"use client";

import { Button } from "@/components/ui/button";
import { PageMutation } from "@tina/__generated__/types";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
export const HeroContent = (props: PageMutation) => {
  return (
    <>
      <div>
        {/* Section 1: Hero heading & description */}
        <div data-tina-field={tinaField(props, "hero_text")}>
          <TinaMarkdown
            content={props.hero_text}
            components={{
              h1: (props) => (
                <h1
                  className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-left"
                  {...props}
                />
              ),
              bold: (props) => (
                <span
                  className="bg-gradient-to-b from-blue-300 to-pink-600 bg-clip-text text-transparent"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="text-md lg:text-lg md:text-lg text-gray-600 mb-8 text-left"
                  {...props}
                />
              ),
            }}
          />
        </div>

        {/* Section 3: Hero buttons */}
        <div className="flex space-x-4">
          {props.links?.map((link, i) => {
            return (
              <Link key={i} href={link?.link || "#"}>
                {link && (
                  <Button
                    data-tina-field={tinaField(link, "label")}
                    size="lg"
                    variant={link?.style === "simple" ? "outline" : "ghost"}
                  >
                    {link?.label}
                  </Button>
                )}
              </Link>
            );
          })}

          {/*  */}
        </div>
      </div>
    </>
  );
};

/**
 * ---------------------------------------------------------------------
 * File Name : hero-content.tsx
 * Component Name : HeroContent
 * Component Type : Content Component
 * Dev Initials : Aniket Raj
 * Date Created : 2024-04-04
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to display the main content of the
 * hero section on the website. It includes a heading, description, and call-
 * to-action buttons to engage users and encourage them to explore the
 * website's services or take a desired action.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The HeroContent component renders the main content of the hero
 * section. It displays a prominent heading to grab the user's attention, a
 * brief description of the services offered, and two call-to-action buttons
 * for users to get started or learn more. The component uses Tailwind CSS
 * classes for styling and layout.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Hero heading
 * This section contains the main heading of the hero section. It uses an
 * <h1> tag and applies responsive font sizes and a bold font weight using
 * Tailwind CSS classes. The heading is left-aligned and has a bottom margin
 * for spacing.
 *
 * Section 2: Hero description
 * This section contains a brief description of the services offered. It
 * uses a <p> tag and applies responsive font sizes and a gray text color
 * using Tailwind CSS classes. The description is left-aligned and has a
 * bottom margin for spacing.
 *
 * Section 3: Hero buttons
 * This section contains two call-to-action buttons. It uses the Button
 * component from the "@/components/ui/button" module and applies a large
 * size and horizontal spacing between the buttons using Tailwind CSS
 * classes. The first button has a default style, while the second button
 * has an outline variant.
 *
 * ------------------------------
 * Input Comments:
 * The HeroContent component does not receive any input props.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs the main content of the hero section, including a
 * heading, description, and call-to-action buttons. The content is styled
 * using Tailwind CSS classes for a visually appealing and responsive
 * layout.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows common patterns for
 * creating a hero section using React and Tailwind CSS. The component
 * imports and utilizes the Button component from a separate module for
 * the call-to-action buttons, promoting code modularity and reusability.
 *
 */
