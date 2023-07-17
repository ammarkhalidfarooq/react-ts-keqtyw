/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { TABLE_COLUMNS } from '../constants';

export default function Home() {
  const endPoint = `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`;
  console.log(process.env);
  useEffect(() => {
    axios.post(endPoint, {
      username: 'admin',
      password: 'admin',
    });
  });
  return (
    <div>
      <Table columns={TABLE_COLUMNS} />
    </div>
  );
}
