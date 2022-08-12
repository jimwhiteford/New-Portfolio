import axios from "axios";

export const resolvers = {
  Query: {
    getAbout: async () => {
      try {
        const about = await axios.request(
          "https://uwisnueghvravxxgiduk.supabase.co"
        );
        console.log(about);
        return about.data.map(({ id, head, skills }) => ({
          id,
          head,
          skills
        }));
      } catch (error) {
        throw error;
      }
    }
  }
};
