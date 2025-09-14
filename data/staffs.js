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
        rating: 2.8,
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
        rating: 3.2,
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
            legal: "Bishnu Dhakal",
            nick: "BD",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/536285568_24790157960619414_7577762466130851534_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1-mHmTLykMAQ7kNvwEBnDsD&_nc_oc=AdmqVboQSHavh0oUFnXD1m9l69GHVcx0SL9hjgHA8zlOC_hNOYDbZrdDSaUB-Rq3t3Y&_nc_zt=23&_nc_ht=scontent.fktm9-2.fna&_nc_gid=Q4E6tGDFSZNAWva_4hVfvQ&oh=00_AfYuoFPXw3HJMraPhzvKVhaS3vAVf1BgOHvOdF-DAaM_MQ&oe=68CC841B`,
        rating: 3.8,
        profession: [2],
        subject: [5],
        media: {
            facebook: `https://www.facebook.com/bishnu.dhakal.792`,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Dhruba Prasad Poudyal",
            nick: "DPP",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/110145734_3355475294512006_7874412075735830423_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=cakYN3EaQjUQ7kNvwFKlCbB&_nc_oc=Adl2Ws-3OKH28iQNlJgywjP7hJnZ9w8y1hEfgyCuA55P43bwQXYwFetgXTUZawkj6Uo&_nc_zt=23&_nc_ht=scontent.fktm9-2.fna&_nc_gid=-ePhn0HSGoiwOQMLV4l-_g&oh=00_AfahvfqOc6Oo-gkrE2TEIwTt_I2LQWimwG7JjhYnIQPnag&oe=68EE2CE4`,
        rating: 3.4,
        profession: [2],
        subject: [4],
        media: {
            facebook: `https://www.facebook.com/dhrubaprasad.paudyal`,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Harihar Paudyal ",
            nick: "HHP",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-1/381044917_3428393674065419_1587520447084364918_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r3HXnOnsDz8Q7kNvwHuH45v&_nc_oc=Adk9FPv9DD0F_vDNF5jb_KhM6P6W-jWnjWFzI19rdw4YOUOAgr-N8cwURuN0G2ch0ME&_nc_zt=24&_nc_ht=scontent.fktm9-2.fna&_nc_gid=gF_HVsWVAk9IH69AOb2VSQ&oh=00_Afbvs-riU8vY_V5iy-0Aa8yPx9i6Qn3JPwP3qOm8Wn9luQ&oe=68CC9A67`,
        rating: 3.1,
        profession: [2],
        subject: [3],
        media: {
            facebook: `https://www.facebook.com/Harihar.Paudyal.7`,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Yubraj Bhandari",
            nick: "YB",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/84518355_2805133412927567_192540244258586624_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=f4Hb-XhF6H0Q7kNvwGNRsbn&_nc_oc=Adk2dcKaHO7Th4gBUWlVl1E8kptRNBvWaJjftylnJWRCvtyFDx73QoTlMPDUYUaruhY&_nc_zt=23&_nc_ht=scontent.fktm9-2.fna&_nc_gid=nsnlSwqYdQa-mTnr_JkDfQ&oh=00_AfbrPvq0VKrgi5yblQnQqh07dm_k2NvFUJN0J_jwW8Ps1g&oe=68EE4F6B`,
        rating: 4.1,
        profession: [2],
        subject: [0],
        media: {
            facebook: `https://www.facebook.com/yubraj.bhandari.106`,
            instagram: ``,
            tiktok: ``,
        },
    },
    {
        name: {
            legal: "Sajesh Piya",
            nick: "SP",
        },
        avatar: `https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/490211790_9645131698933176_3967047669433814953_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=oNRAWDVru8IQ7kNvwFcEWqU&_nc_oc=AdlwbODPEAS4-oRpA8RBPZqQp2ZBXBCt7_SnXJW1F0htWp5vMUDUr-jpUg16zx3N8OQ&_nc_zt=23&_nc_ht=scontent.fktm9-2.fna&_nc_gid=lIvnXKxUyVswZ7GVMrI3wQ&oh=00_AfYFcClTQVsfESApKKgjpsI086YyF7LQeipG5cAKOp5xgg&oe=68CC8126`,
        rating: 2.9,
        profession: [2],
        subject: [7],
        media: {
            facebook: `https://www.facebook.com/sajesh.piya`,
            instagram: ``,
            tiktok: ``,
        },
    },
];
/*
    {
        name: {
            legal: "",
            nick: "",
        },
        avatar: ``,
        rating: 0,
        profession: [2],
        subject: [0],
        media: {
            facebook: ``,
            instagram: ``,
            tiktok: ``,
        },
    },
*/
export default staffs;
