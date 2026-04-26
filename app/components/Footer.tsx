import * as S from "../styles/footer.style";
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.Grid>
        <S.BrandColumn>
          <S.Logo to="/">
            chillax
            <span>cooling</span>
          </S.Logo>
          <S.BrandText>
            {t('footer.description')}
          </S.BrandText>
        </S.BrandColumn>

        {/* <div>
          <S.ColumnTitle>{t('footer.clients')}</S.ColumnTitle>
          <S.Nav>
            <S.StyledLink to="/catalog">{t('footer.catalog')}</S.StyledLink>
            <S.StyledLink to="/shipping">{t('footer.shipping')}</S.StyledLink>
          </S.Nav>
        </div> */}

        <div>
          <S.ColumnTitle>{t('footer.support')}</S.ColumnTitle>
          <S.Nav>
            <S.StyledLink to="/privacy">{t('footer.privacy')}</S.StyledLink>
            <S.StyledLink to="/returns">{t('footer.returns')}</S.StyledLink>
          </S.Nav>
        </div>

        <div>
          <S.ColumnTitle>{t('footer.contacts') ||`Контакти`}</S.ColumnTitle>
          <S.ContactInfo>
            <p className="address">м. Дніпро, пр. Науки</p>
            <p className="email">info@pocketfresh.ua</p>
          </S.ContactInfo>
        </div>
      </S.Grid>
      
      <S.BottomBar>
        <p>&copy; {year} {t('footer.rights') || `Pocket.Fresh | Всі права захищені`}</p>
      </S.BottomBar>
    </S.FooterContainer>
  );
}