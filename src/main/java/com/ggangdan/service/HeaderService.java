package com.ggangdan.service;

import java.util.ArrayList;

import com.ggangdan.dto.InvestigationDTO;

public interface HeaderService {
	ArrayList<InvestigationDTO> getInvestigationList();
	int insertInvestigation(String investigationName);
}
