package com.myweb.www.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class GFileVO {
	private String uuid;
	private String saveDir;
	private String fileName;
	private int fileType;
	private long gno;
	private long fileSize;
	private String regAt;
}
