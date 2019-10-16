class StoryService {

  async getStory(storyId) {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
    );
    const story = await response.json();
    return {
      creator: story.by,
      title: story.title,
      score: story.score,
      time: story.time,
      url: story.url
    };
  }

  async getUser(userId) {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/user/${userId}.json?print=pretty`
    );
    const user = await response.json();
    return {
      id: user.id,
      created: user.created,
      karma: user.karma,
      submitted: user.submitted.length
    };
  }

  async getStories() {
    const bestStories = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    if (bestStories.status !== 200) {
      throw new Error(`There was a problem, code: ${bestStories.status}`);
    }

    const data = await bestStories.json();

    const best20 = data.splice(0, 20);
    const promises = [];
    best20.map(storyId => {
      return promises.push(this.getStory(storyId));
    });

    const storyData = await Promise.all(promises);
    return {
      stories: storyData
    };
  }

}

export default StoryService;
