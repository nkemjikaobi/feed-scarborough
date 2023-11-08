import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { useDebouncedCallback } from 'use-debounce';
import { composeClasses } from '@/app/shared/helpers';
import SearchIcon from './SearchIcon';
import CustomSkeleton from './Skeleton';

export interface EnhancedTableHeaderDefaultProps<T> {
	field: keyof T;
	label: string;
	sortable?: boolean;
	prefix?: string;
	sufix?: string;
	headerProps?: TableCellProps;
	fieldProps?: TableCellProps;
	headerStyles?: React.CSSProperties;
	fieldStyles?: React.CSSProperties;
}

export interface EnhancedTableRowDefaultProps {
	uuid: string;
}

export interface EnhancedTableOptions<T> {
	toolbar?: boolean;
	selectable?: boolean;
	rowsPerPage?: number[];
	defaultOrder?: 'asc' | 'desc';
	defaultOrderBy?: keyof T;
}

export interface EnhancedTableColumnEditableProps<T> {
	field: keyof T;
	inputProps?: React.HTMLProps<HTMLInputElement>;
	autoUpdate?: boolean;
	onChange?: (evt: React.ChangeEvent<HTMLInputElement>, row: T) => void;
	onBlur?: (evt: React.ChangeEvent<HTMLInputElement>, row: T) => void;
}

interface ColumnField<T> {
	value: T;
}

type Order = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (
	a: { [key in Key]: number | string },
	b: { [key in Key]: number | string }
) => number {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
	array: any,
	comparator: (a: T, b: T) => number
) {
	const stabilizedThis = array.map((el: any, index: any) => [el, index] as [T, number]);
	stabilizedThis.sort((a: any, b: any) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el: any) => el[0]);
}

interface EnhancedTableHeaderProps<
	X extends EnhancedTableHeaderDefaultProps<Y>,
	Y extends EnhancedTableRowDefaultProps
> {
	headers: X[];
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Y) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
	options: EnhancedTableOptions<Y>;
	allHeadersStyles?: React.CSSProperties;
}

const EnhancedTableHeader = <
	X extends EnhancedTableHeaderDefaultProps<Y>,
	Y extends EnhancedTableRowDefaultProps
>({
	headers,
	onSelectAllClick,
	order,
	orderBy,
	numSelected,
	rowCount,
	onRequestSort,
	options,
	allHeadersStyles,
}: EnhancedTableHeaderProps<X, Y>) => {
	const createSortHandler =
		(property: keyof Y) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};

	// visual fix for ordering icon
	const centeringFix = (cell: X) => {
		return cell.headerProps?.align === 'center'
			? { paddingLeft: 'calc(1.5em + 8px)' }
			: {};
	};

	return (
		<TableHead>
			<TableRow style={{ backgroundColor: '#F9FAFB' }}>
				{options.selectable && (
					<TableCell padding='checkbox'>
						<Checkbox
							color='primary'
							indeterminate={numSelected > 0 && numSelected < rowCount}
							checked={rowCount > 0 && numSelected === rowCount}
							onChange={onSelectAllClick}
							inputProps={{
								'aria-label': 'select all',
							}}
						/>
					</TableCell>
				)}

				{headers.map(headCell => (
					<TableCell
						key={String(headCell.field)}
						// align={headCell.numeric ? 'right' : 'left'}
						// padding={headCell.disablePadding ? 'none' : 'normal'}
						align={'left'}
						padding={'none'}
						sortDirection={orderBy === headCell.field ? order : false}
						{...headCell.headerProps}
						style={{
							padding: '0 1rem',
							height: '3rem',
							fontFamily: 'Plus Jakarta Sans',
							fontWeight: 'bold',
							fontSize: '0.75em',
							lineHeight: '1.5em',
							...allHeadersStyles,
							...headCell.headerStyles,
							...centeringFix(headCell),
						}}
					>
						{headCell.sortable ? (
							<TableSortLabel
								active={orderBy === headCell.field}
								direction={orderBy === headCell.field ? order : 'asc'}
								onClick={createSortHandler(headCell.field)}
								style={{
									padding: '0.5rem 0',
								}}
							>
								{headCell.label}
								{orderBy === headCell.field ? (
									<Box component='span' sx={visuallyHidden}>
										{order === 'desc'
											? 'sorted descending'
											: 'sorted ascending'}
									</Box>
								) : null}
							</TableSortLabel>
						) : (
							<div>{headCell.label}</div>
						)}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

interface EnhancedTableToolbarProps {
	toolbar: boolean;
	title?: string;
	numSelected: number;
}

function EnhancedTableToolbar({
	toolbar = true,
	title,
	numSelected,
}: EnhancedTableToolbarProps) {
	return toolbar ? (
		<Toolbar
			className='border-b border-gray-300 rounded-t-xl'
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: theme =>
						alpha(
							theme.palette.primary.main,
							theme.palette.action.activatedOpacity
						),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography
					sx={{ flex: '1 1 100%' }}
					color='inherit'
					variant='subtitle1'
					component='div'
				>
					{numSelected} selected
				</Typography>
			) : (
				title && (
					<Typography
						sx={{ flex: '1 1 100%' }}
						variant='h6'
						id='tableTitle'
						component='div'
						style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 'bold' }}
					>
						{title}
					</Typography>
				)
			)}
			{/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
		</Toolbar>
	) : null;
}

interface EnhancedTableProps<
	A extends EnhancedTableHeaderDefaultProps<B>,
	B extends EnhancedTableRowDefaultProps
> {
	headers: A[];
	rows: B[];
	preselected?: B['uuid'][];
	options?: EnhancedTableOptions<B>;
	title?: string;
	search?: boolean;
	searchPlaceholder?: string;
	searchDebounce?: boolean;
	searchWrapper?: string;
	onRowClick?: (row: B) => void;
	onSelectionChange?: (rowsSelected: B['uuid'][]) => void;
	editable?: EnhancedTableColumnEditableProps<B>[];
	allHeadersStyles?: React.CSSProperties;
	allFieldsStyles?: React.CSSProperties;
	emptyView?: () => React.ReactNode;
	loading?: boolean;
	minWidth?: number;
}

const EnhancedTable = <
	A extends EnhancedTableHeaderDefaultProps<B>,
	B extends EnhancedTableRowDefaultProps
>({
	headers,
	rows: initialRows,
	preselected = [],
	options = {
		toolbar: true,
		selectable: true,
		rowsPerPage: [5, 10, 25],
		defaultOrder: 'asc',
	},
	title,
	search = false,
	searchPlaceholder = 'Search',
	searchDebounce = false,
	searchWrapper = '',
	onRowClick,
	onSelectionChange,
	editable,
	allHeadersStyles,
	allFieldsStyles,
	emptyView,
	loading = false,
	minWidth = 1000,
}: EnhancedTableProps<A, B>) => {
	const [rows, setRows] = React.useState<B[]>(initialRows);
	const [order, setOrder] = React.useState<Order>(
		options.defaultOrder || 'asc'
	);
	const [orderBy, setOrderBy] = React.useState<keyof B>(
		options.defaultOrderBy || headers[0].field
	);
	const [selected, setSelected] =
		React.useState<readonly B['uuid'][]>(preselected);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(
		(options.rowsPerPage && options.rowsPerPage[0]) || 5
	);
	const [searchQuery, setSearchQuery] = React.useState('');

	const searchDebounceFunc = useDebouncedCallback(
		value => setSearchQuery(value),
		searchDebounce ? 800 : 0
	);

	React.useEffect(() => {
		if (JSON.stringify(selected) !== JSON.stringify(preselected)) {
			setSelected(preselected.filter(p => rows.find(row => row.uuid === p)));
		}
	}, [preselected]);

	React.useEffect(() => {
		setRows(initialRows);
		setSelected(
			preselected.filter(p => initialRows.find(row => row.uuid === p))
		);
	}, [initialRows]);

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof B
	) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelected = rows.map(n => String(n.uuid));

			if (onSelectionChange && selected.length !== newSelected.length)
				onSelectionChange(newSelected);

			setSelected(newSelected);
			return;
		}

		onSelectionChange && onSelectionChange([]);

		setSelected([]);
	};

	const handleClick = (
		event: React.MouseEvent<unknown>,
		uuid: string,
		row: B
	) => {
		if (options.selectable && !onRowClick) {
			const selectedIndex = selected.indexOf(uuid);
			let newSelected: B['uuid'][] = [];

			if (selectedIndex === -1) {
				newSelected = newSelected.concat(selected, uuid);
			} else if (selectedIndex === 0) {
				newSelected = newSelected.concat(selected.slice(1));
			} else if (selectedIndex === selected.length - 1) {
				newSelected = newSelected.concat(selected.slice(0, -1));
			} else if (selectedIndex > 0) {
				newSelected = newSelected.concat(
					selected.slice(0, selectedIndex),
					selected.slice(selectedIndex + 1)
				);
			}

			if (onSelectionChange && selected.length !== newSelected.length)
				onSelectionChange(newSelected);

			setSelected(newSelected);
			return;
		}

		onRowClick && onRowClick(row);
	};

	const handleCheckboxClick = (
		event: React.MouseEvent<unknown>,
		uuid: string,
		row: B
	) => {
		if (options.selectable) {
			const selectedIndex = selected.indexOf(uuid);
			let newSelected: B['uuid'][] = [];

			if (selectedIndex === -1) {
				newSelected = newSelected.concat(selected, uuid);
			} else if (selectedIndex === 0) {
				newSelected = newSelected.concat(selected.slice(1));
			} else if (selectedIndex === selected.length - 1) {
				newSelected = newSelected.concat(selected.slice(0, -1));
			} else if (selectedIndex > 0) {
				newSelected = newSelected.concat(
					selected.slice(0, selectedIndex),
					selected.slice(selectedIndex + 1)
				);
			}

			if (onSelectionChange && selected.length !== newSelected.length)
				onSelectionChange(newSelected);

			setSelected(newSelected);
			return;
		}
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const isSelected = React.useCallback(
		(uuid: B['uuid']) => selected.indexOf(uuid) !== -1,
		[selected]
	);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const visibleRows = React.useMemo(() => {
		const rowsWithSearchFilter = rows.filter(r =>
			searchQuery
				? JSON.stringify(
						Object.values(r).filter(
							v => typeof v === 'string' || typeof v === 'number'
						)
				  )
						.toLowerCase()
						.includes(searchQuery.toLocaleLowerCase())
				: true
		);

		return stableSort(
			rowsWithSearchFilter,
			getComparator(order, orderBy)
		).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
	}, [rows, order, orderBy, page, rowsPerPage, searchQuery]);

	const updateInputValue = (
		e: React.ChangeEvent<HTMLInputElement>,
		row: B,
		editableField: EnhancedTableColumnEditableProps<B>
	) => {
		setRows(
			[...rows].map(r => {
				if (r.uuid === row.uuid) {
					return {
						...r,
						[editableField.field]:
							editableField.inputProps?.type === 'number'
								? Number(e.target.value)
								: String(e.target.value),
					};
				}

				return r;
			})
		);
	};

	const renderField = <T extends A & ColumnField<T>>(
		row: any,
		col: any,
		editable: any
	) => {
		const editableField = editable && editable.find((e: any) => e.field === col.field);

		if (!editableField) {
			if (typeof col.value === 'number' || typeof col.value === 'string')
				return `${col.prefix ? col.prefix : ''}${col.value}${
					col.sufix ? col.sufix : ''
				}`;

			return col.value;
		}

		const isItemSelected = isSelected(String(row.uuid));

		return (
			<div
				key={`by-order-${String(orderBy)}-${order}`}
				className='table-field-input-box'
			>
				<span className='table-field-input-prefix'>{col.prefix}</span>
				<input
					disabled={options.selectable && !isItemSelected}
					{...editableField.inputProps}
					value={
						editableField.inputProps?.type === 'number'
							? Number(col.value)
							: String(col.value)
					}
					onClick={e => {
						e.stopPropagation();
					}}
					onChange={e => {
						e.stopPropagation();

						if (editableField.autoUpdate) {
							updateInputValue(e, row, editableField);
						}
						editableField.onChange && editableField.onChange(e, row);
					}}
					onBlur={e => {
						e.stopPropagation();

						editableField.onBlur && editableField.onBlur(e, row);
					}}
					onKeyDown={e => {
						e.stopPropagation();

						if (e.key === 'Enter') {
							editableField.onBlur &&
								editableField.onBlur(
									e as unknown as React.ChangeEvent<HTMLInputElement>,
									row
								);
						}
					}}
				/>
				<span className='table-field-input-sufix'>{col.sufix}</span>
			</div>
		);
	};

	return (
		<>
			{title && (
				<EnhancedTableToolbar
					toolbar={!!options.toolbar}
					title={title}
					numSelected={!loading ? selected.length : 0}
				/>
			)}
			{search && (
				<div
					className={composeClasses(
						'flex items-center justify-between bg-white border border-gray-400 m-5 p-2 rounded-lg',
						searchWrapper
					)}
				>
					<div className='flex items-center text-lg text-umba-black-300 w-full'>
						<SearchIcon
							className='text-gray-500'
							style={{ fill: 'none', fontSize: '1rem' }}
						/>
						<input
							className='ml-2 border-none outline-none w-full text-[15px] tracking-[0.4px]'
							type='search'
							placeholder={searchPlaceholder}
							onChange={evt => searchDebounceFunc(evt.target.value)}
							onKeyDown={evt => {
								if (evt.key === 'Enter') {
									setSearchQuery((evt.target as HTMLInputElement).value);
								}
							}}
						/>
					</div>
				</div>
			)}
			{!loading && rows && rows[0] ? (
				<div>
					<TableContainer>
						<Table
							sx={{ minWidth: minWidth }}
							aria-labelledby='tableTitle'
							size={'medium'}
						>
							<EnhancedTableHeader<A, B>
								headers={headers}
								numSelected={selected.length}
								order={order}
								orderBy={String(orderBy)}
								onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={rows.length}
								options={options}
								allHeadersStyles={allHeadersStyles}
							/>
							<TableBody>
								{visibleRows.map((row: any, index: any) => {
									const isItemSelected = isSelected(String(row.uuid));
									const labelId = `enhanced-table-checkbox-${row.uuid}`;

									const columns = headers.map(header => {
										const column = Object.entries(row).find(
											rowField => rowField[0] === header.field
										);

										if (!column)
											return {
												...header,
												value: '',
											} as A & ColumnField<string>;

										return {
											...header,
											value: column[1],
										} as A & ColumnField<(typeof column)[1]>;
									});

									return (
										<TableRow
											className={`${
												options.selectable && !isItemSelected && 'opacity-25'
											}`}
											hover
											onClick={event =>
												handleClick(event, String(row.uuid), row)
											}
											role='checkbox'
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={index}
											selected={isItemSelected}
											sx={{
												cursor:
													!options.selectable && !onRowClick
														? 'initial'
														: 'pointer',
												'&.Mui-selected': {
													backgroundColor: 'white',
												},
											}}
										>
											{options.selectable && (
												<TableCell padding='checkbox'>
													<Checkbox
														color='primary'
														checked={isItemSelected}
														onClick={event => {
															event.stopPropagation();
															handleCheckboxClick(event, String(row.uuid), row);
														}}
														inputProps={{
															'aria-labelledby': labelId,
														}}
														sx={{
															borderRadius: 5,
														}}
													/>
												</TableCell>
											)}
											{columns.map((col, ind) => (
												<TableCell
													key={`col-${ind}`}
													component='th'
													scope='row'
													padding='none'
													{...col.fieldProps}
													style={{
														height: '3.5rem',
														padding: '0 1rem',
														fontFamily: 'Plus Jakarta Sans',
														...allFieldsStyles,
														...col.fieldStyles,
													}}
												>
													{renderField(row, col, editable)}
												</TableCell>
											))}
										</TableRow>
									);
								})}
								{emptyRows > 0 && (
									<TableRow>
										<TableCell
											colSpan={
												options.selectable ? headers.length + 1 : headers.length
											}
										/>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={options.rowsPerPage}
						component='div'
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</div>
			) : !loading ? (
				emptyView && emptyView()
			) : (
				<CustomSkeleton />
			)}
		</>
	);
};

export default EnhancedTable;
