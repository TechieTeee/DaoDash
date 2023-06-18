import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import type { ReactElement } from "react";
import { Alert } from "react-daisyui";
import { AppLayout } from "../layouts/AppLayout";

type Picture = {
    id: number;
    imageUrl: string;
    caption: string;
};

type GalleryCardProps = {
    picture: Picture;
};

const GalleryCard: React.FC<GalleryCardProps> = ({ picture }) => {
    return (
        <div className="gallery-card">
            <img src={picture.imageUrl} alt="Gallery Image" />
            <p className="caption">{picture.caption}</p>
        </div>
    );
};

type Props = {
    pictures: Picture[];
};

const Page: NextPage<Props> = ({ pictures }) => {
    return (
        <div className="w-full text-left">
            <Alert status="info" className="mb-4">
                Below are the active DAO members, who approved being listed in the directory.
            </Alert>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {pictures.map((picture) => (
                    <GalleryCard key={picture.id} picture={picture} />
                ))}
            </div>
        </div>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout
            title="Membership Directory"
            description="DashDao Membership Directory"
        >
            {page}
        </AppLayout>
    );
};

// This gets called at build time
export const getStaticProps: GetStaticProps<Props> = async () => {
    // Fetch data from your public folder
    const pictures: Picture[] = [
        {
            id: 1,
            imageUrl: "/Image1.jpg",
            caption: "Ashley_S | Dao Sub-Team: UX/UI",
        },
        {
            id: 2,
            imageUrl: "/Image11.jpg",
            caption: "Josh91 | Dao Sub-Team: Marketing",
        },
        {
            id: 3,
            imageUrl: "/Image9.jpg",
            caption: "BlaketheGreat | Dao Sub-Team: Fullstack",
        },
        {
            id: 4,
            imageUrl: "/Image4.jpg",
            caption: "GeekyNaruto | Dao Sub-Team: DevOps",
        },
        {
            id: 5,
            imageUrl: "/Image5.jpg",
            caption: "Addis_8 | Dao Sub-Team: Frontend",
        },
        {
            id: 6,
            imageUrl: "/Image6.jpg",
            caption: "HackMatt | Dao Sub-Team: Cybersecurity",
        },
        {
            id: 7,
            imageUrl: "/Image7.jpg",
            caption: "Prathith_A | Dao Sub-Team: Protocol Dev",
        },
        {
            id: 8,
            imageUrl: "/Image8.jpg",
            caption: "Z0e_12 | Dao Sub-Team: Graphic Design" ,
        },
        {
            id: 9,
            imageUrl: "/Image3.jpg",
            caption: "Mike_12 | Dao Sub-Team: Finance",
        },
    ];

    return { props: { pictures } };
};

export default Page;


