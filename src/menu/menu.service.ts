import { HttpException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository : Repository<Menu>,
  ){}

async create(
  CreateMenuDto : CreateMenuDto,
):Promise<Menu>{
  const ItemData = await this.menuRepository.create(
    CreateMenuDto,
  );
  return this.menuRepository.save(ItemData);
}
async findAll(): Promise<Menu[]> {
  return await this.menuRepository.find();
}

async findOne(id: number): Promise<Menu> {
  const ItemData =
    await this.menuRepository.findOneBy({ id });
  if (!ItemData) {
    throw new HttpException(
      'item Not Found',
      404,
    );
  }
  return ItemData;
}

async update(
  id: number,
  updateMenuDto: UpdateMenuDto,
): Promise<Menu> {
  const existingUser = await this.findOne(id);
  const itemData = this.menuRepository.merge(
    existingUser,
    updateMenuDto,
  );
  return await this.menuRepository.save(
    itemData,
  );
}

async remove(id: number): Promise<Menu> {
  const existingUser = await this.findOne(id);
  return await this.menuRepository.remove(
    existingUser,
  );
}
}