import { usePathname } from 'next/navigation';
import { LinksList, StyledLink } from './Nav.styled';

export default function Nav() {
  const pathName = usePathname();

  return (
    <div>
      <LinksList>
        <li>
          <StyledLink
            style={
              pathName === '/'
                ? {
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                  }
                : {
                    color: '#262626',
                    border: '1px solid rgba(38, 38, 38, 0.15)',
                  }
            }
            href="/news"
          >
            News
          </StyledLink>
        </li>
        <li>
          <StyledLink
            style={
              pathName === '/'
                ? {
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                  }
                : {
                    color: '#262626',
                    border: '1px solid rgba(38, 38, 38, 0.15)',
                  }
            }
            href="/notices"
          >
            Find pet
          </StyledLink>
        </li>
        <li>
          <StyledLink
            style={
              pathName === '/'
                ? {
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                  }
                : {
                    color: '#262626',
                    border: '1px solid rgba(38, 38, 38, 0.15)',
                  }
            }
            href="/friends"
          >
            Our friends
          </StyledLink>
        </li>
      </LinksList>
    </div>
  );
}
