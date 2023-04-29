import Card from './Card';
import './Trending.css';
import { useState } from 'react';

export default function Trending() {
  const [trendingStories, setTrendingtories] = useState([
    {
      id: 1,
      title: 'Post 1',
      author: {
        name: 'Brad',
        sirname: 'Marshall',
      },
      desc: "The company's founders promised good vibes and greener cities. Now they’re stepping down, and the new CEO is focused on saving the business.",
      content:
        'AT A LOCATION he keeps secret, John Honovich was on his laptop, methodically scouring every link on a website for a conference half a world away. Hikvision, the world’s largest security camera manufacturer, was hosting the event—the 2018 AI Cloud World Summit—in its hometown of Hangzhou, a city of about 10 million people not far from Shanghai. Honovich, the founder of a small trade publication that covered video surveillance technology, wanted to find out what the latest Hikvision gear could do.He zeroed in on one section of the conference agenda titled “Eco-Friendly, Peaceful, Relaxed” and found a description of an AI-powered system installed around Mount Tai, a historically sacred mountain in Shandong. A video showed Hikvision cameras pointed at tourists climbing the thousands of stone steps leading to the famous peak. Piano music played as a narrator explained, in Mandarin with English subtitles, that the cameras were there “to identify all visitors to ensure the safety of all.” The video cut to a shot of a computer screen, and Honovich hit pause. He saw a zoomed-in view of one visitor’s face. Below it was data that the camera’s AI had inferred. Honovich downloaded the video and took screenshots of the computer screen, for safekeeping. ',
      timestamp: 1681013672252,
      imgUrl: 'assets/images/post1.png',
      category: 'business',
      subcategory: 'crypto',
      views: 2,
    },
    {
      id: 2,
      title: 'Post 2',
      author: {
        name: 'Brad2',
        sirname: 'Marshall',
      },
      desc: 'Now they’re stepping down, and the new CEO is focused on saving the business.',
      content:
        'Methodically scouring every link on a website for a conference half a world away. Hikvision, the world’s largest security camera manufacturer, was hosting the event—the 2018 AI Cloud World Summit—in its hometown of Hangzhou, a city of about 10 million people not far from Shanghai. Honovich, the founder of a small trade publication that covered video surveillance technology, wanted to find out what the latest Hikvision gear could do.He zeroed in on one section of the conference agenda titled “Eco-Friendly, Peaceful, Relaxed” and found a description of an AI-powered system installed around Mount Tai, a historically sacred mountain in Shandong. A video showed Hikvision cameras pointed at tourists climbing the thousands of stone steps leading to the famous peak. Piano music played as a narrator explained, in Mandarin with English subtitles, that the cameras were there “to identify all visitors to ensure the safety of all.” The video cut to a shot of a computer screen, and Honovich hit pause. He saw a zoomed-in view of one visitor’s face. Below it was data that the camera’s AI had inferred. Honovich downloaded the video and took screenshots of the computer screen, for safekeeping. ',
      timestamp: 1681013672252,
      imgUrl: 'assets/images/post2.png',
      category: 'business',
      subcategory: 'rockets',
      views: 32,
    },
    {
      id: 3,
      title: 'Post 3',
      author: {
        name: 'Brad3',
        sirname: 'Marshall',
      },
      desc: 'Now they’re stepping down, and the new CEO is focused on saving the business.',
      content:
        'Methodically scouring every link on a website for a conference half a world away. Hikvision, the world’s largest security camera manufacturer, was hosting the event—the 2018 AI Cloud World Summit—in its hometown of Hangzhou, a city of about 10 million people not far from Shanghai. Honovich, the founder of a small trade publication that covered video surveillance technology, wanted to find out what the latest Hikvision gear could do.He zeroed in on one section of the conference agenda titled “Eco-Friendly, Peaceful, Relaxed” and found a description of an AI-powered system installed around Mount Tai, a historically sacred mountain in Shandong. A video showed Hikvision cameras pointed at tourists climbing the thousands of stone steps leading to the famous peak. Piano music played as a narrator explained, in Mandarin with English subtitles, that the cameras were there “to identify all visitors to ensure the safety of all.” The video cut to a shot of a computer screen, and Honovich hit pause. He saw a zoomed-in view of one visitor’s face. Below it was data that the camera’s AI had inferred. Honovich downloaded the video and took screenshots of the computer screen, for safekeeping. ',
      timestamp: 1681013672252,
      imgUrl: 'assets/images/post2.png',
      category: 'science',
      subcategory: 'physics',
      viewCounter: 5,
    },
    {
      id: 4,
      title: 'Post 3',
      author: {
        name: 'Brad3',
        sirname: 'Marshall',
      },
      desc: 'Now they’re stepping down, and the new CEO is focused on saving the business.',
      content:
        'Methodically scouring every link on a website for a conference half a world away. Hikvision, the world’s largest security camera manufacturer, was hosting the event—the 2018 AI Cloud World Summit—in its hometown of Hangzhou, a city of about 10 million people not far from Shanghai. Honovich, the founder of a small trade publication that covered video surveillance technology, wanted to find out what the latest Hikvision gear could do.He zeroed in on one section of the conference agenda titled “Eco-Friendly, Peaceful, Relaxed” and found a description of an AI-powered system installed around Mount Tai, a historically sacred mountain in Shandong. A video showed Hikvision cameras pointed at tourists climbing the thousands of stone steps leading to the famous peak. Piano music played as a narrator explained, in Mandarin with English subtitles, that the cameras were there “to identify all visitors to ensure the safety of all.” The video cut to a shot of a computer screen, and Honovich hit pause. He saw a zoomed-in view of one visitor’s face. Below it was data that the camera’s AI had inferred. Honovich downloaded the video and took screenshots of the computer screen, for safekeeping. ',
      timestamp: 1681013672252,
      imgUrl: 'assets/images/post2.png',
      category: 'science',
      subcategory: 'physics',
      viewCounter: 5,
    },
  ]);
  return (
    <div className="trending-stories">
      <h1 className="section-header">Trending Stories</h1>
      <div className="inner-card">
        {trendingStories.map((post) => {
          return (
            <Card
              key={trendingStories.id}
              postOfCard={post}
              isDescHidden={false}
              isCategoryHidden={false}
              direction="column"
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
