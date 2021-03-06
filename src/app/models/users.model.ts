export class UsersModel {
  public profileImg: string;
  public name: string;
  public lastName: string;
  public urlProfile: string;
  public alias: string;
  public description: string;
  public twitter: string;
  public youtube: string;
  public youtubeId: string;
  public youtubeChannels: object;
  public youtubeTotalVideos: number;
  public yotubeApiKey: string;
  public photos: object;

  constructor(
    profileImg: string,
    name: string,
    lastName: string,
    urlProfile: string,
    alias: string,
    description: string,
    twitter: string,
    youtube: string,
    youtubeId: string,
    youtubeChannels: object,
    youtubeTotalVideos: number,
    yotubeApiKey: string,
    photos: object
    ) {
      this.profileImg = profileImg;
      this.name = name;
      this.lastName = lastName;
      this.urlProfile = urlProfile;
      this.alias = alias;
      this.description = description;
      this.twitter = twitter;
      this.youtube = youtube;
      this.youtubeId = youtubeId;
      this.youtubeChannels = youtubeChannels;
      this.youtubeTotalVideos = youtubeTotalVideos;
      this.yotubeApiKey = yotubeApiKey;
      this.photos = photos;
    }

}
