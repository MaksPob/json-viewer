import {
	Button, DatePicker, Input, Modal, Switch,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { UserInfo } from '../../../core/user';
import { changeUserInfoAction } from '../../../store/users/actions';
import { UserInfoEditModalProps } from './types';

export const UserInfoEditModal = (props: UserInfoEditModalProps) => {
	const { userInfo } = props;
	const dispatch = useAppDispatch();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [user, setUserInfo] = useState({ ...userInfo });

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
		// here you can check isEqual(user, userInfo) for performance
		dispatch(changeUserInfoAction(user as UserInfo));
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		setUserInfo(userInfo as UserInfo);
	};

	useEffect(() => {
		setUserInfo({ ...userInfo });
	}, [userInfo]);

	return (
		<>
			<Button type="primary" onClick={showModal}>Edit user info</Button>
			<Modal title="User info edit" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<span>IsActive: </span>
				<Switch
					checked={user.isActive}
					onChange={checked => setUserInfo({ ...user, isActive: checked })}
				/>
				<br />
				<span>Name: </span>
				<Input
					type="text"
					placeholder={user.name}
					value={user.name}
					onChange={e => setUserInfo({ ...user, name: e.target.value })}
				/>
				<span>Picture: </span>
				<Input
					type="url"
					placeholder={user.picture}
					value={user.picture}
					onChange={e => setUserInfo({ ...user, picture: e.target.value })}
				/>
				<span>Age: </span>
				<Input
					type="number"
					placeholder={user.age?.toString()}
					value={user.age}
					onChange={e => setUserInfo({ ...user, age: Number(e.target.value) })}
				/>
				<span>Email: </span>
				<Input
					type="email"
					placeholder={user.email}
					value={user.email}
					onChange={e => setUserInfo({ ...user, email: e.target.value })}
				/>
				<span>Address: </span>
				<Input
					type="text"
					placeholder={user.address}
					value={user.address}
					onChange={e => setUserInfo({ ...user, address: e.target.value })}
				/>
				<span>About: </span>
				<TextArea
					value={user.about}
					onChange={e => setUserInfo({ ...user, about: e.target.value })}
				/>
				<span>Registered: </span>
				<DatePicker
					defaultValue={moment(user.registered, 'YYYY-MM-DD')}
					onChange={(date, dateString) => setUserInfo({ ...user, registered: dateString })}
				/>
			</Modal>
		</>
	);
};
