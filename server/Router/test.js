const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");


router.get("/",async(req,res)=>{
    const getHTML = async() =>{
        try{
            const html = (await axios.get('https://finance.naver.com/')).data;
            return html;
        } catch(e){
            console.log(e)
        }
    }

    const parsing = async(page) =>{
        const $ = cheerio.load(page);
        const courses = [];
        const $courseList = $(".section1>.group1>.tbl_home>tbody>tr");

        $courseList.each((idx,node)=>{
            const rate = $(node).find("td:nth-of-type(1)").text();
            // const title = $(node).find("td:nth-of-type(1)").text();
            courses.push({
                rate
            })
        });
        return courses;
    }

    let courses = [];
    let i = 0;
    const getCourse = async() =>{
        const html = await getHTML();
        const courses = await parsing(html);
        return courses;
    }

    let test = await getCourse();
    res.send(test);
});

module.exports = router;