Data source details
-----------------------
Click a data source listed in the data source management home to view various attributes of that data source. The following subsections describe each area of the data source details. Note that a data source represents a Druid database table stored in Metatron and as a time-series table necessarily includes a timestamp column.

Common top area
================

.. figure:: /_static/img/part02/common_top_area.png
	:alt: common_top_area

1. **Name**: Name of the data source. Click on it if you want modify it.
2. **Description**: Description of the data source. Click on it if you want modify it.
3. **Last updated stamp**: Shows who and when last updated the data source.
4. **Delete**: Click this icon to display a menu that allows you to delete the data source.
5. **Tab selection**: Each tab displays a specific set of attributes of the data source. Depending upon the type of data source, not all of the four tabs may be displayed. For details on each tab, refer to the relevant subsection below.

Information tab
=================

In the information tab, you can view details of the data source and modify some basic settings. This tab is composed of the areas of Data information, Permission, and Ingestion information.

**Data information area**
This area displays basic information of the data source.

.. figure:: /_static/img/part02/data_information_area.png
	:alt: data_information_area

1. **Data type**: Type of the imported source data from which the data source has been created.
2. **Status**: Displays the availability of the data source.
3. **Size**: Displays the size of the data source.
4. **Duration**: Displays the time range of the timestamps included in the data source.
5. **Granularity settings**: Displays the granularities defined when the data source was created.
	- Segment Granularity: In Druid, a data source is stored into multiple segments to be processed over multiple nodes in the distributed cluster environment. This granularity setting defines the time intervals into which the data source is partitioned.

	- Query Granularity: Defines the minimum time period by which data is queried. This ensures faster returns by aggregating data per granularity interval.

6. **Histogram**: A graph displaying the size of the data stored within each time interval in Kbytes. The reason why this histogram can be rendered is that the Druid engine timestamps every single row in the table.

**Permission area**
In this area, you can check and set which workspaces have access to the data source.

.. figure:: /_static/img/part02/permission_area.png
	:alt: permission_area

1. **Allow all workspaces to use this data source**: Select this check box to make the data source available to all workspaces.
2. **Edit**: Used to allow specific workspaces to access the data source. This button will disappear if the data source is set as open data.
3. **Number of sharing workspaces**: Displays how many workspaces have access to the data source.


**Ingestion information area**
This area displays information on the master data from which the data source has been created.

.. figure:: /_static/img/part02/Ingestion_information_area.png
	:alt: Ingestion_information_area

Grid data tab
===============

The grid data tab displays the elements in the data source.

.. figure:: /_static/img/part02/grid_data_tab.png
	:alt: grid_data_tab

1. **Search data**: Searches the table by the value you type in.
2. **Role**: Displays all, dimension, or measure columns.
3. **Type**: Displays the columns whose data type is selected.
4. **Rows**: Displays the number of records registered in the data table.
5. **Download CSV**: Downloads the displayed data into a CSV file.

Column details tab
===================

In the column details tab, you can view details of each column of the data source table.

**Column view/settings**
The top section of the column details tab provides a user interface to filter columns by the criteria you define. Columns that meet the criteria are displayed on the left. You can also edit column settings.

.. figure:: /_static/img/part02/column_search_setting.png
	:alt: Column_search_setting

1. **Search data**: Searches for columns by the column name you type in.
2. **Role**: Displays all, dimension, or measure columns.
3. **Type**: Displays the columns whose data type is selected.
4. **View all**: Clears all filter settings in the Search data, Role, and Type options and returns to view all columns.
5. **Configure schema**: Click this button to open a window where you can edit the current column settings.
6. **Data source name**: Displays the name of the data source (Druid database table).
7. **Column list**: Lists table columns.

**Column basic information area**
This area displays some basic information of the selected column.

.. figure:: /_static/img/part02/column_basic_information_area.png
	:alt: column_basic_information_area

1. **Schema information**: Displays attributes of the selected column.
2. **Display setting**: Displays the metadata of the selected column.
3. **Summary**: Displays information about the values contained in the selected column.
4. **Statistics**: Displays aggregations over the values contained in the selected column, including max, min, avg, and stdev.

**Histogram area**
A graph displaying the size of the data stored within each time interval in Kbytes. The reason why this histogram can be rendered is that the Druid engine timestamps every table record.

.. figure:: /_static/img/part02/histogram_area.png
	:alt: histogram_area

Monitoring tab
===================

The Monitoring tab reports the usage of the data source.

**Change of transaction area**
Displays the trend of data source transactions over time.

.. figure:: /_static/img/part02/transaction_change_area.png
	:alt: transaction_change_area

**Change of data size area**
Displays the trend of the data source size over time.

.. figure:: /_static/img/part02/data_size_change_area.png
	:alt: data_size_change_area

**Query distribution area**
Displays information on queries performed for the data source.

.. figure:: /_static/img/part02/query_distribution_area.png
	:alt: query_distribution_area

1. **Query distribution by user (during the last week)**: Displays a pie chart of query percentages by user for the past week.
2. **Query distribution by elapsed time (during the last week)**: Displays a pie chart of query percentages by execution time for the past week.

**Query log area**
Used to view a detailed history of each performed query.

.. figure:: /_static/img/part02/query_log_area.png
	:alt: query_log_area

1. **Query date**: Set a time range to display only those queries that were last executed within this time range.
2. **Query type**: Filters the performed queries by type.
3. **Result**: Displays all, succeeded, or failed queries.
4. **Query list**: Lists queries filtered by specified criteria.
5. **Detail**: Click on it to view the query statement.
