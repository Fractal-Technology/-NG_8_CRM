import {LeadsDto, LeadsUpdateDto} from '@fractalcrm/dto';
import {apiEndpointDecription, apiParams, apiPaths, apiTags} from '@fractalcrm/enums';
import {LeadsModel} from '@fractalcrm/mongoose-models';
import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ApiOperation} from '@nestjs/swagger';
import {LeadsService} from './leads.service';

@Controller(apiPaths.leads)
export class LeadsController {
	constructor(private leadsService: LeadsService) {
	}

	@Get(apiPaths.allLeads)
	@ApiOperation({title: apiTags.leadEndpoints, description: apiEndpointDecription.leadGetAll})
	async listAll(): Promise<LeadsModel[]> {
		return await this.leadsService.findAll();
	}

	@Get(apiPaths.leadModel)
	@ApiOperation({title: apiTags.leadEndpoints, description: apiEndpointDecription.leadModel})
	async leadModel(): Promise<any> {
		return await this.leadsService.leadModel();
	}

	@Post(apiPaths.createLead)
	@ApiOperation({title: apiTags.leadEndpoints, description: apiEndpointDecription.leadCreate})
	async create(@Body() lead: LeadsDto) {
		return await this.leadsService.create(lead);
	}

	@Get(apiPaths.getLeadById)
	@ApiOperation({title: apiTags.leadEndpoints, description: apiEndpointDecription.leadGetById})
	async read(@Query(apiParams.id) id: string) {
		return this.leadsService.findOne(id);
	}

	@Put(apiPaths.updateLeadById)
	@ApiOperation({title: apiTags.leadEndpoints, description: apiEndpointDecription.leadUpdateById})
	async update(@Param(apiParams.id) id: string, @Body() lead: LeadsUpdateDto) {
		return this.leadsService.update(id, lead);
	}

	@Delete(apiPaths.deleteLeadByEmail)
	@ApiOperation({title: apiTags.leadEndpoints, description: apiEndpointDecription.leadDelete})
	async delete(@Param(apiParams.email) id: string) {
		return this.leadsService.delete(apiParams.email);
	}
}
