import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { Button, Input, Textarea, Container, Stack, Grid } from "@mantine/core";

let arr = [
  {
    title: "Dağ 1",
    par: "açıklama 1",
  },
  {
    title: "Dağ 2",
    par: "açıklama 2",
  },
  {
    title: "Dağ 3",
    par: "açıklama 3",
  },
  {
    title: "Dağ 4",
    par: "açıklama 4",
  },
];

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [list, setList] = useState(arr);
  const [lesson, setLesson] = useState([]);
  const click = () => {
    setTitle("");
    setParagraf("");
    const copyList = [...list];
    copyList.push({
      title: title,
      par: paragraf,
    });
    setList(copyList);
  };
  return (
    <Container>
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
        <Input.Wrapper label="Başlık">
          <Input
            placeholder="Başık Yazınız"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>
        <Textarea
          label="Paragraf"
          placeholder="Paragraf Yazınız"
          value={paragraf}
          onChange={(e) => setParagraf(e.target.value)}
        />
        <Button variant="outline" color="cyan" size="md" onClick={click}>
          Kart Oluştur
        </Button>
      </Stack>
      <p>Kartlar</p>
      <Grid>
        {list.map(({ title, par }, index) => (
          <Grid.Col span={4} key={index}>
            <Card title={title} p={par} lesson={lesson} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
