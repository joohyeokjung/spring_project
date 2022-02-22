package com.myweb.www.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myweb.www.domain.ProfileVO;
import com.myweb.www.repository.MemberDAO;
import com.myweb.www.repository.ProfileDAO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ProfileServiceImpl implements ProfileService {
	
	@Inject
	private ProfileDAO pdao;
	
	@Inject
	private MemberDAO mdao;
	
	@Transactional
	@Override
	public int register(ProfileVO pvo) {
		mdao.updateProfileLimit(pvo.getEmail());
		return pdao.insertProfile(pvo);
	}

	@Override
	public ProfileVO login(long pno) {
		return pdao.loginProfile(pno);
	}

	@Override
	public int modify(ProfileVO pvo) {
		return pdao.updateProfile(pvo);
	}

	@Transactional
	@Override
	public int remove(ProfileVO pvo) {
		mdao.updateDeleteProfileLimit(pvo.getEmail());
		return pdao.deleteProfile(pvo.getPno());
	}

	@Override
	public List<ProfileVO> choiceProfile(String email) {
		return pdao.loginChoice(email);
	}

	@Override
	public int checkPin(long pno) {
		return pdao.checkPin(pno);
	}

}
