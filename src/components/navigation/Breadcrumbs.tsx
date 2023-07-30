import React from 'react';

import { Container } from 'react-bootstrap';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';

interface Props {
  className?: string;
}

const Breadcrumbs = ({ className }: Props) => {
  const breadcrumbs = useReactRouterBreadcrumbs();

  return (
    <div className={`p-2 ${className}`}>
      <Container className="d-flex">
        {breadcrumbs.map(({ breadcrumb, key }) => (
          <div key={key}>
            <span
              className="m-0 p-2 container text-muted text-capitalize"
              key={breadcrumb as string}
            >
              {breadcrumb}
            </span>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Breadcrumbs;
