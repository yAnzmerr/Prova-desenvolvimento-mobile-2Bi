import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const Card = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginBottom: 20 }}
      onPress={() => navigation.navigate('Details', { item })}
    >
      <View style={styles.cardContainer}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Propor Troca</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const items = [
    {
      id: 1,
      name: 'Espada de luz e sombra',
      description:
        'Uma espada metade luz e metade escuridão que causa o dobro de dano a inimigos de tipo contrário da lâmina',
      image:
        'https://i.pinimg.com/736x/db/f8/7e/dbf87e64031bf3443923f7a93c603118--fantasy-weapons-fantasy-rpg.jpg',
    },
    {
      id: 2,
      name: 'O anel do poder',
      description:
        'Um lendário anel que dobra sua armadura e dá dano de fogo aos inimigos',
      image:
        'https://geekculture.co/wp-content/uploads/2023/03/1-of-1-ring-mtg-lord-of-the-rings.jpg',
    },
    {
      id: 3,
      name: 'Brincos de potara',
      description:
        'São brincos que fazem parte de um comum traje de treinamento mas com propriedade para 2 usuários se fundirem',
      image:
        'https://pm1.narvii.com/6488/6c9136770bd0fef6076cdabcc8afef0759811b93_00.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.buttonText}>Ir para o Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Registro')}
      >
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecuperarSenha')}
      >
        <Text style={styles.buttonText}>Recuperar Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detailTitle}>{item.name}</Text>
      <Image source={{ uri: item.image }} style={styles.detailImage} />
      <Text style={styles.detailDescription}>{item.description}</Text>
    </View>
  );
};

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Tela de Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Cadastrar e voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Tela de Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const PasswordRecoveryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Tela de Recuperação de Senha</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para a Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dashboardText}>Dashboard do Usuário</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="RecuperarSenha"
          component={PasswordRecoveryScreen}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262A56',
    padding: 20,
  },
  cardContainer: {
    backgroundColor: '#B8621B',
    borderRadius: 10,
    padding: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  cardDescription: {
    marginTop: 10,
    color: 'white',
  },
  cardButton: {
    backgroundColor: '#E3CCAE',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  cardButtonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detailTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  detailImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
  detailDescription: {
    marginTop: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#E3CCAE',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  dashboardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
