import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async  create(
    @Body() createMenuDto: CreateMenuDto) {
      try{
        await this.menuService.create(
          createMenuDto
        );
    return {
      success:true,
      message :"Item added to Menu successfully "
    };
  }catch(error){
    return{
      success :false,
      message:error.message,
    };
  }
}

  @Get()
 async findAll(){
  try{
    const data = await this.menuService.findAll();
    return {
      success: true,
      data,
      message : "Item fetched successfully"
    };
  }
  catch(error){
    return {
      success: false,
      message : error.message,
    };
  }
 }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.menuService.findOne(+id,
      );
      return {
        success: true,
        data,
        message:"Item fetched successfully",
      };
    }catch(error){
      return {
        success : false,
        message : error.message,
      };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMenurDto: UpdateMenuDto,
  ) {
    try {
      await this.menuService.update(
        +id,
        updateMenurDto,
      );
      return {
        success: true,
        message: 'Item Updated Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.menuService.remove(+id);
      return {
        success: true,
        message: 'Item Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}