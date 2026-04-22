import * as S from "../styles/footer.style";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.Grid>
        <S.BrandColumn>
          <S.Logo to="/">
            POCKET
            <span>.FRESH</span>
          </S.Logo>
          <S.BrandText>
            Найкращі рішення для вашого комфорту з 2024 року.
          </S.BrandText>
        </S.BrandColumn>

        <div>
          <S.ColumnTitle>Клієнтам</S.ColumnTitle>
          <S.Nav>
            <S.StyledLink to="/catalog">Каталог</S.StyledLink>
            <S.StyledLink to="/shipping">Доставка</S.StyledLink>
          </S.Nav>
        </div>

        <div>
          <S.ColumnTitle>Підтримка</S.ColumnTitle>
          <S.Nav>
            <S.StyledLink to="/privacy">Приватність</S.StyledLink>
            <S.StyledLink to="/returns">Повернення</S.StyledLink>
          </S.Nav>
        </div>

        <div>
          <S.ColumnTitle>Контакти</S.ColumnTitle>
          <S.ContactInfo>
            <p className="address">м. Дніпро, пр. Науки</p>
            <p className="email">info@pocketfresh.ua</p>
          </S.ContactInfo>
        </div>
      </S.Grid>
      
      <S.BottomBar>
        <p>&copy; {year} Pocket.Fresh | Всі права захищені</p>
      </S.BottomBar>
    </S.FooterContainer>
  );
}