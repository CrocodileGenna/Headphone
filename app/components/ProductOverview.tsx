import * as S from "../styles/overview.style";
import { useTranslation } from 'react-i18next';
export function ProductOverview() {
  const { t } = useTranslation();
  return (
    <S.Section>
      <S.Container>
        <S.VideoBox>
          <S.VideoLabel>{t('features.video_label')}</S.VideoLabel>
        </S.VideoBox>
        
        <S.Content>
          <S.Title>{t('features.title')}</S.Title>
          <S.Description>
           {t('features.description')}
          </S.Description>
          <S.List>
            <S.ListItem>
              <S.ListIcon>✦</S.ListIcon> 
              {t('features.list.item_1')}
            </S.ListItem>
            <S.ListItem>
              <S.ListIcon>✦</S.ListIcon> 
              {t('features.list.item_2')}
            </S.ListItem>
          </S.List>
        </S.Content>
      </S.Container>
    </S.Section>
  );
}