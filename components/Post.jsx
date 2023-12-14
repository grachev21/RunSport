// Библиотека для подключения стилей
import styled from 'styled-components/native';

const PostDetails = styled.View`
flex-direction: column;
justify-content: center;
flex: 1;
`;

// Текст
const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

// Дата
const PostDate = styled.Text`
  font-size: 12px;
  color: blue;
  margin-top: 2px;
`;

// С помощью библиотеки styled-components мы можем
// писать стили как в css
const PostView = styled.View`
  margin: 10px;
  margin-top: 40px;
  flex-direction: row;
  background: #9cbdd3;
  padding: 12px;
  border-radius: 12px;
`;

// Отображение картинок
const PostImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 12px;

`;

export const Post = ({title, imageUrl, createAt}) => {
    return <PostView>

        <PostImage source={{uri: imageUrl}}/>

        <PostDetails>
          <PostTitle>{title}</PostTitle>
          <PostDate>{createAt}</PostDate>
        </PostDetails>

    </PostView>
}
