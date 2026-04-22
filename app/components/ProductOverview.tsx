import * as S from "../styles/overview.style";

export function ProductOverview() {
  return (
    <S.Section>
      <S.Container>
        <S.VideoBox>
          <S.VideoLabel>Відеоогляд</S.VideoLabel>
        </S.VideoBox>
        
        <S.Content>
          <S.Title>Технології для життя</S.Title>
          <S.Description>
            Дізнайтеся більше про те, як наші пристрої створюють ідеальний баланс вологості та свіжості у вашому домі.
          </S.Description>
          <S.List>
            <S.ListItem>
              <S.ListIcon>✦</S.ListIcon> 
              Розумне споживання енергії
            </S.ListItem>
            <S.ListItem>
              <S.ListIcon>✦</S.ListIcon> 
              Екологічно чисті матеріали
            </S.ListItem>
          </S.List>
        </S.Content>
      </S.Container>
    </S.Section>
  );
}