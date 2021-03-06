package com.myweb.www.repository;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.myweb.www.domain.CustomPagingVO;
import com.myweb.www.domain.WatchListVO;

public interface WatchListDAO {
	int insertWatchList(WatchListVO wvo);
	List<WatchListVO> selectWatchList(CustomPagingVO pgvo);
	int deleteWatchList(long wno);
	int deleteAllWatchList(@Param("email") String email, @Param("profileName") String profileName);
	List<WatchListVO> selectAccountWatchList(WatchListVO wvo);
	int selectWatchListTotalCount();
}
