import FileIcon from '../assets/icons/File.svg';
import ImageIcon from '../assets/icons/Image.svg';
import VideoIcon from '../assets/icons/Video.svg';
let icon;
const filesType = ['txt', 'doc', 'pdf'];
const videoType = ['mp4', 'mov', 'avi'];
const imagesType = ['jpg', 'png', 'svg', 'gif'];
const addIcon = (type) => {
  if (filesType.includes(type)) icon = FileIcon;
  if (imagesType.includes(type)) icon = ImageIcon;
  if (videoType.includes(type)) icon = VideoIcon;
  return icon;
};
export default addIcon;
