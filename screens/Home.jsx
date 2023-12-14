import React from 'react';
// Компоненты natve
import { Text, View, StatusBar, Alert, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
// Библиотека для api
import axios from 'axios';
// Экспортируем Post
import { Post } from '../components/Post';

// Разметка ===================================================================
export const HomeScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  // Подключение api
  const [items, setItems] = React.useState();

  // Получение api и вывод ошибки в случае если не удалось получить api
  const fetchPosts = () => {
    setIsLoading(true);

    axios.get('https://65780863197926adf62f5577.mockapi.io/run')
    .then(({ data }) => {
      setItems(data);
    }).catch(err => {
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось получить статьи');
    // После того как наш запрос вернулся изменяем setIsLoading - true / false
    }).finally(() => {
      setIsLoading(false);
    })
  }

  // Вызываем функцию получения api в React
  React.useEffect(fetchPosts, []);

    // Если идет загрузка 'isLoading проверяет'.
    if (isLoading) {
      // То мы возвращаем индикатор загрузки
      return (
      <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <ActivityIndicator size='large' />
        <Text>Загрузка...</Text>
      </View>
      // ActivityIndicator => Индикатор загрузки.
      );
    }
  // Если isLoading == ture то мы не отображаем эту часть
  return (

    <View>
      <FlatList // Позволяет делать скролл
      // RefreshControl делает перезагрузку по свайпу
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
      // Получаем массив наших статей
      data={[...items, ...items]} 
      renderItem={({ item }) => (
        // TouchableOpacity реагирует на касание
        <TouchableOpacity onPress={() => alert('hell')}>
          <Post title={item.title} imageUrl={item.imageUrl} createAt={item.createAt} />
        </TouchableOpacity>
      )}

      />

      <StatusBar style="auto" />
    </View>
  );
}
