// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const list = [
  {
    id: "1",
    title: "ประกันภัยโรคมะเร็ง",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_product_DualCare.png"
  },
  {
    id: "2",
    title: "ประกันภัยรถยนต์ภาคสมัครใจ",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_product_8.png"
  },
  {
    id: "3",
    title: "ประกันอัคคีภัยโครงการรักษ์บ้านสำหรับที่อยู่อาศัย",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_product_7.png"
  },
  {
    id: "4",
    title: "ประกันภัยรถยนต์ภาคบังคับ (พ.ร.บ.)",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_product_9.png"
  },
  {
    id: "5",
    title: "ประกันภัยสุขภาพ Healthy Flexi Plan",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_product_DualCare.png"
  },
  {
    id: "6",
    title: "ประกันภัย Dual Care",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_product_5.png"
  },
  {
    id: "7",
    title: "ประกันภัยอุบัติเหตุส่วนบุคคล PA ME STYLE : FAMILY FIRST",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_product_mestyle.png"
  },
  {
    id: "8",
    title: "ประกันภัยโรคร้ายจากยุง",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_mosquito.png"
  },
  {
    id: "9",
    title: "ประกันภัยอุบัติเหตุส่วนบุคคล PA Holiday",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_product_3.png"
  },
  {
    id: "10",
    title: "ประกันภัย 3 โรคกวนใจ",
    img: "https://www.bangkokinsurance.com/images/product/homepage/icon_product_3D.png"
  }

];

export default function handler(req, res) {
  res.status(200).json({ data: list })
}
