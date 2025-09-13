/*
ID      PROFESSION      SUBJECT
---------------------------------------------
0       N/A             N/A
1       Principle       Nepali
2       Teacher         English
3       Worker          Physics
4       Security        Chemistry
5       .               Compulsory Mathmatics
6       .               Biology
7       .               Computer
8       .               Business Mathmatics
9       .               Social Studies
*/

const staffs = [
    {
        name: {
            legal: "",
            nick: "",
        },
        avatar: ``,
        rating: 0,
        profession: [0],
        subject: [0],
        media: {
            facebook: ``,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Gopal Poudel",
            nick: "GP",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-1/402370645_2086590141697362_1730556788374307063_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=8pnduA7jQ9oQ7kNvwF6-j9R&_nc_oc=Adkm_OubMLcEknv-9MEu9FB2UKIXUnsPnX-eXW-MV-6XgNq2TEo-_k93vqGo5QS7jdo&_nc_zt=24&_nc_ht=scontent.fktm9-2.fna&_nc_gid=sY-XO53xNFBxeN3x7voJDA&oh=00_AfZMlZUiidXxNGKPaMhZUuxYZ6pQrX8eE6hbxyvDd2Ftjw&oe=68C886C1`,
        rating: 4.5,
        profession: [2],
        subject: [-2],
        media: {
            facebook: `https://www.facebook.com/gopal.poudel.545849`,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Rabindra Raj Bista",
            nick: "RRB",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-1/459267800_8941195945909393_5118210749528490548_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_ohc=zX_sxtwsPf8Q7kNvwEd32vI&_nc_oc=AdlTa2n32ebkh_aPwqAkeYklkE9iQorv5kb-JL4axIG3Dz21C1s09toRR0d_su_VjbI&_nc_zt=24&_nc_ht=scontent.fktm9-2.fna&_nc_gid=Q8AKmhIEpmmi1Yjuhp3pUg&oh=00_AfYIFbRxxz244Kxwij3w-UUS4K3cOS20vct4_68igl5xKQ&oe=68C85CFA`,
        rating: 4.3,
        profession: [2],
        subject: [3, -3],
        media: {
            facebook: `https://www.facebook.com/rajrbista`,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "BP Sarthak",
            nick: "BPP",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/513095899_24074338035562982_3033865724483904715_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5Ad95SlS6LIQ7kNvwHbVBbz&_nc_oc=AdnqhzsbhCxzfev1Nvm0zc6GlUY7AbwlmaTSRe1kyKuiJQlP7moiS3l7_0sLsVK2di4&_nc_zt=23&_nc_ht=scontent.fktm9-2.fna&_nc_gid=fNvUN-taaMIBGK-JTJFYcg&oh=00_AfZSzFkUwxGdmlsxuxqNTLjpDNbDn1t7AVcn1iO76XGA8w&oe=68C88669`,
        rating: 4.4,
        profession: [2],
        subject: [3, -3],
        media: {
            facebook: `https://www.facebook.com/bp.sarthak.2025`,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Mahesh Tiwari",
            nick: "MT",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/501306436_10022007461196755_211480919825785184_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KYP7eUi_Z88Q7kNvwG4ucmj&_nc_oc=Adk4frw0pF0rfOhjbZVXZ2l-n_OOucOJ41jT4f1AwuCIDuGzfz8o2Y9AziCKvy0CTEQ&_nc_zt=23&_nc_ht=scontent.fktm9-2.fna&_nc_gid=bJnLfLrBTMwDqxd2wJ1bOA&oh=00_AfbeOeXvPc88mnf6eoi5ZnavEkjZGmx_C5uUNwu6rn-E5w&oe=68C8B314`,
        rating: 3.5,
        profession: [2],
        subject: [-4],
        media: {
            facebook: `https://www.facebook.com/tiwari.mahesh`,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Dipak Khanal",
            nick: "DK",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-1/501052871_10162487397083377_7909572693229053438_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_ohc=v202zJZtHHgQ7kNvwHiE26l&_nc_oc=AdkjjtL0zOWWgD2s7S6ECReWaiDOCDB0PECJpAfswSIrJuoBr0s7VcVPnldmfh23iiY&_nc_zt=24&_nc_ht=scontent.fktm9-2.fna&_nc_gid=8QY13bheBag_Pk1n2AoBYg&oh=00_AfYPcOB3xfLlyqiSnRYGglMv62yYwGkij_bv7y4yfAyGEw&oe=68C88831`,
        rating: 4,
        profession: [2],
        subject: [0],
        media: {
            facebook: `https://www.facebook.com/khanaldipak`,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Sample Teacher",
            nick: "ST",
        },
        avatar: ``,
        rating: 0,
        profession: [0],
        subject: [0],
        media: {
            facebook: ``,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Sample Teacher",
            nick: "ST",
        },
        avatar: ``,
        rating: 0,
        profession: [0],
        subject: [0],
        media: {
            facebook: ``,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Sample Teacher",
            nick: "ST",
        },
        avatar: ``,
        rating: 0,
        profession: [0],
        subject: [0],
        media: {
            facebook: ``,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Sample Teacher",
            nick: "ST",
        },
        avatar: ``,
        rating: 0,
        profession: [0],
        subject: [0],
        media: {
            facebook: ``,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Sample Teacher",
            nick: "ST",
        },
        avatar: ``,
        rating: 0,
        profession: [0],
        subject: [0],
        media: {
            facebook: ``,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Sample Teacher",
            nick: "ST",
        },
        avatar: ``,
        rating: 0,
        profession: [0],
        subject: [0],
        media: {
            facebook: ``,
            instagram: ``,
            tiktok: ``,
        },
    },
];

export default staffs;