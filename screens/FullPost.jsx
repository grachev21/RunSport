import React from "react";
import styled from 'styled-components/native'
import { View } from "react-native";
import axios from "axios";
import { Loading } from "../components/Loading";


const PostImage = styled.Image`
border-radius: 10px;
width: 100%;
height: 250px;
margin-bottom: 20px;
`;

const PostText = styled.Text`
font-size: 18px;
line-height: 24px;
`;

export const FullPostScreen = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState();

    React.useEffect(() => {
        axios.get('https://65780863197926adf62f5577.mockapi.io/run')
        .then(({ data }) => {
          setData(data);
        }).catch(err => {
          console.log(err);
          Alert.alert('Ошибка', 'Не удалось получить статьи');
        // После того как наш запрос вернулся изменяем setIsLoading - true / false
        }).finally(() => {
          setIsLoading(false);
        })

    }, []);

    // Если идет загрузка 'isLoading проверяет'.
    if (isLoading) {
        // То мы возвращаем индикатор загрузки
        return (<Loading/>);
    }

    return (
        <View style={{ padding: 20}}>
        <PostImage source={{ uri: data.imageUrl }}/>
        <PostText>
          {data.text}
        </PostText>
        </View>

    )
}

