
class StoryService {

  async getBestStories() {

    let items = {stories: [], users: []};

    const bestStories = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    if (bestStories.status !== 200) {
      throw new Error(`There was a problem, code: ${bestStories.status}`);
    }

    const data = await bestStories.json();

    const best20 = data.splice(0, 20);
    let storyData = [];
    let userData = [];

     best20.forEach(async item => {
      const stories = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
      if (stories.status !== 200) {
        throw new Error(`There was a problem, code: ${stories.status}`);
      }
      const story = await stories.json()
        storyData.push({
          creator: story.by,
          title: story.title,
          score: story.score,
          time: story.time,
          url: story.url
  
        })

     
      const users = await fetch(`https://hacker-news.firebaseio.com/v0/user/${story.by}.json?print=pretty`)
      if (users.status !== 200) {
        throw new Error(`There was a problem, code: ${users.status}`);
      }
      const user = await users.json()
        userData.push({
          id: user.id,
          created: user.created,
          karma: user.karma,
          submitted: user.submitted.length,
  
        })

    })
    console.log(storyData)
    items.stories = storyData;
    items.users = userData;

    console.log(items)
   return items;
  }
  
}

export default StoryService;
