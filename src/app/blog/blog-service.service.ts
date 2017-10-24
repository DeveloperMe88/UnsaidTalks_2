import { Injectable } from '@angular/core';
import { BBox } from './../shared/model/iBbox';

@Injectable()
export class BlogServiceService {

  constructor() { }
  blogPostsDeatils: BBox[];
  selectedBlogPost:String="";

  getBlogPosts():BBox[]{
    this.blogPostsDeatils=[
    {id : "0",
    title: "Post1",
    imageUrl:"https://www.theblogstarter.com/wp-content/uploads/2014/02/4.jpg"},
    {id : "1",
    title: "Post2",
    imageUrl:"https://www.revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png"},
    {id : "2",
    title: "Post3",
    imageUrl:"http://markdalton.net/wp-content/uploads/2017/03/F7148507-7860-465B-950B-2F55B420CEDB-1229-0000010877FFE7CA_tmp.jpg"},
    {id : "3",
    title: "Post4",
    imageUrl:"http://10.15.0.113:15871/cgi-bin/blockpage.cgi?ws-session=800243148"},
    {id : "4",
    title: "Post5",
    imageUrl:"http://foxtailmarketing.com/wp-content/uploads/2014/07/+recommended_blog_3.jpg"},
    {id : "5",
    title: "Post6",
    imageUrl:"https://www.theblogstarter.com/wp-content/uploads/2014/02/4.jpg"},
    {id : "6",
    title: "Post7",
    imageUrl:"http://foxtailmarketing.com/wp-content/uploads/2014/07/+recommended_blog_3.jpg"}];

    return this.blogPostsDeatils;
  }

  getBlogDescription(postName:String):String{
    /*
    We will search according to "PostName" of selected blog. We get selected psot name and we will hit our DB
    according to this post. Currently we return a hardcoded string for each post.
     */

    this.selectedBlogPost=`<p style="text-align: justify;">Handling the stress during placement season becomes as important as placement preparation when you are going through tough placement procedures. I know this is a stressful phase for many of you. So, the article is not about how you should be preparing for placements but rather how you should be dealing with the stress. Don&rsquo;t let the stress engulf you. There&rsquo;s a long way to go ahead.</p>
<p style="text-align: justify;">I will divide the placement semester into three parts: &ndash;</p>
<ol style="text-align: justify;">
<li>Before you get placed</li>
<li>Immediately after you get placed</li>
<li>After your placement (when the feeling of getting placed finally seeps in) till the end of the semester</li>
</ol>
<p style="text-align: justify;">There will be a lot of anxiety before you get placed. Many of you must be under stress at this moment also.</p>
<p style="text-align: justify;">You must have seen many people getting placed. It&rsquo;s good for them but don&rsquo;t let that hamper your motivated self. That might start to weigh you down but that weight is not yours to carry. It&rsquo;s an achievement for them but it must not be a formidable accomplishment for you. At these times, you may also feel mystified as to why you are not able to crack company papers or interviews. Either way, you must try to ameliorate your skills. Talk to your seniors. They are the best guides. You can review all the interview experiences of your seniors for the company that you are preparing for from our website. Appear for every company with the same enthusiasm that you had in the beginning of placement season. Trust your skills and your hard work. Have faith in God.</p>
<p style="text-align: justify;">&nbsp;</p>
<p style="text-align: justify;">Not everyone gets placed in the first try. So, if you are one from that lot, don&rsquo;t worry, take a deep breath. It&rsquo;s just a difficult day. It&rsquo;s not the load that breaks you down, it&rsquo;s the way you carry it. You don&rsquo;t need to reach the zenith of perfection, just make all your arduous efforts. Don&rsquo;t worry, your day is coming closer. Before appearing for any test or interview just remember you just need one perfect shot to be a champion. And that one perfect shot can take many tries before it happens. Learn from every failure and don&rsquo;t let that mistake happen again. Analyze yourself after every test that you were not able to clear or interview you were rejected.</p>
<p style="text-align: justify;">The day you get placed is the day you feel an inexplicable euphoria. It&rsquo;s the most beautiful time of the semester. You will start feeling light-headed. It will take a few days for the feeling of getting placed to finally sink in. But don&rsquo;t let this feeling get to your head. Don&rsquo;t let it overwhelm you. Be humble and benign. One year from now, you will realize that getting placed was just a beginning, there&rsquo;s still a long way to go. Avoid that headstrong phase where you feel that you have conquered the world. Try to help and motivate your companions who are still on the other side of the fence.</p>
<p style="text-align: justify;">As far as the remaining semester is concerned, enjoy it to the utmost. You will never get this time back. Roam around the campus. Eat your heart out. Spend time with your friends. Make some amazing college ending memories. Trust me, this time is never going to come back. Few months down the lane, you will crave for your college days. Emboss these memories in your heart.</p>
<p style="text-align: justify;">All the best for this semester and all your future endeavors. Always remember one thing, you will get placed only on the day it is supposed to happen. No sooner or later. And on that day, the dots will join themselves.</p>
<p style="text-align: justify;">For such helpful articles stay tuned to our website&rsquo;s blog:&nbsp;<a href="http://unsaidtalks.com/blog/">http://unsaidtalks.com/blog/</a></p>
<p style="text-align: justify;">For interview experiences of your seniors' visit:&nbsp;<a href="http://unsaidtalks.com/interviews/">http://unsaidtalks.com/interviews/</a></p>
<p style="text-align: justify;">This was Aastha Mahendru- 2017 ECE Alumni. Feel free to contact me at &ldquo;aasthamahendru94@gmail.com&rdquo;. I thank you so much for reading.&nbsp;<img src="https://html-online.com/editor/tinymce4_6_5/plugins/emoticons/img/smiley-smile.gif" alt="smile" /></p>`
    
    return this.selectedBlogPost;
  }
  

}
